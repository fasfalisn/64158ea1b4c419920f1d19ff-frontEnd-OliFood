/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: it@vilabs.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserUserimage model module.
 * @module model/UserUserimage
 * @version 1.0.0
 */
class UserUserimage {
    /**
     * Constructs a new <code>UserUserimage</code>.
     * @alias module:model/UserUserimage
     */
    constructor() { 
        
        UserUserimage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUserimage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUserimage} obj Optional instance to populate.
     * @return {module:model/UserUserimage} The populated <code>UserUserimage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUserimage();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
UserUserimage.prototype['data'] = undefined;

/**
 * @member {String} name
 */
UserUserimage.prototype['name'] = undefined;






export default UserUserimage;

