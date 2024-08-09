import { HeaderParamValidator } from '../utils/util/header_param_validator';
import { Param} from './param';
import { SDKException } from "../core/com/zoho/crm/api/exception/sdk_exception";
import { Constants} from '../utils/util/constants';
import * as Logger from "winston";
import { DatatypeConverter } from "../utils/util/datatype_converter";

/**
 * This class represents the HTTP parameter name and value.
 */
class ParameterMap {
    private parameterMap: Map<string,string> = new Map<string,string>();

    /**
	 * This is a getter method to get parameter map.
	 * @returns {Map} A Map representing the API request parameters.
	 */
    public getParameterMap() : Map<string,string> {
        return this.parameterMap;
    }

    /**
	 * The method to add parameter name and value.
	 * @param {Param} param - A Param class instance.
	 * @param {object} value - An object containing the parameter value.
	 * @throws {SDKException}
	 */
    public async add<T>(param: Param<T>, value: T){
        if(param == null || param == undefined) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, Constants.PARAM_INSTANCE_NULL_ERROR);
		}
        let paramName = param.getName();
        if(paramName == null || paramName == undefined) {
			throw new SDKException(Constants.PARAM_NAME_NULL_ERROR, Constants.PARAM_NAME_NULL_ERROR_MESSAGE);
        }
        if(value == null) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, paramName + Constants.NULL_VALUE_ERROR_MESSAGE);
		}
        try {
            let paramClassName = param.getClassName();
            let parsedParamValue: any;
            if(paramClassName !==  undefined && paramClassName !== null) {
                parsedParamValue = await new HeaderParamValidator().validate(paramName, paramClassName, value).catch(err=> { throw err;});
            } else {
				try {
					let type = Object.prototype.toString.call(value);
					parsedParamValue = await DatatypeConverter.postConvert(value, type.toLowerCase());
				} catch (err) {
					parsedParamValue = value;
				}
			}
            if(this.parameterMap.has(paramName) && this.parameterMap.get(paramName)!= null) {
                let paramValue = this.parameterMap.get(paramName);    
                if(paramValue !== undefined){
                    paramValue = paramValue.concat(",", parsedParamValue.toString());
                    this.parameterMap.set(paramName, paramValue);
                }
            } else {
                this.parameterMap.set(paramName, parsedParamValue.toString());
            }
        } catch (error) {
			if (!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.PARAM_EXCEPTION, error);
			throw error;
		}
    }
}

export {
    ParameterMap as MasterModel,
    ParameterMap as ParameterMap
}