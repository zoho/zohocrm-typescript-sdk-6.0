import {APIException} from "./api_exception";
import {Model} from "../../../../../../utils/util/model";

class ActionWrapper implements Model{

	private assignmentRules: Array<APIException>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the assignmentRules
	 * @returns An Array representing the assignmentRules
	 */
	public getAssignmentRules(): Array<APIException>	{
		return this.assignmentRules;

	}

	/**
	 * The method to set the value to assignmentRules
	 * @param assignmentRules An Array representing the assignmentRules
	 */
	public setAssignmentRules(assignmentRules: Array<APIException>): void	{
		this.assignmentRules = assignmentRules;
		this.keyModified.set("assignment_rules", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A String representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A String representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	ActionWrapper as MasterModel,
	ActionWrapper as ActionWrapper
}
