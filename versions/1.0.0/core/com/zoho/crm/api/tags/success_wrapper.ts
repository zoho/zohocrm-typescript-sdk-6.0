import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Model} from "../../../../../../utils/util/model";

class SuccessWrapper implements Model, ActionHandler{

	private tags: Array<ActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the tags
	 * @returns An Array representing the tags
	 */
	public getTags(): Array<ActionResponse>	{
		return this.tags;

	}

	/**
	 * The method to set the value to tags
	 * @param tags An Array representing the tags
	 */
	public setTags(tags: Array<ActionResponse>): void	{
		this.tags = tags;
		this.keyModified.set("tags", 1);

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
	SuccessWrapper as MasterModel,
	SuccessWrapper as SuccessWrapper
}
