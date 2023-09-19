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
import UserUserimage from './UserUserimage';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @param productName {String} 
     * @param productPrice {Number} 
     * @param productUnit {String} 
     * @param productCategory {String} 
     * @param productImage {module:model/UserUserimage} 
     */
    constructor(productName, productPrice, productUnit, productCategory, productImage) { 
        
        Product.initialize(this, productName, productPrice, productUnit, productCategory, productImage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productName, productPrice, productUnit, productCategory, productImage) { 
        obj['productName'] = productName;
        obj['productPrice'] = productPrice;
        obj['productUnit'] = productUnit;
        obj['productCategory'] = productCategory;
        obj['productImage'] = productImage;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('productPrice')) {
                obj['productPrice'] = ApiClient.convertToType(data['productPrice'], 'Number');
            }
            if (data.hasOwnProperty('productUnit')) {
                obj['productUnit'] = ApiClient.convertToType(data['productUnit'], 'String');
            }
            if (data.hasOwnProperty('productCategory')) {
                obj['productCategory'] = ApiClient.convertToType(data['productCategory'], 'String');
            }
            if (data.hasOwnProperty('productImage')) {
                obj['productImage'] = UserUserimage.constructFromObject(data['productImage']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Product.prototype['_id'] = undefined;

/**
 * @member {String} productName
 */
Product.prototype['productName'] = undefined;

/**
 * @member {Number} productPrice
 */
Product.prototype['productPrice'] = undefined;

/**
 * @member {String} productUnit
 */
Product.prototype['productUnit'] = undefined;

/**
 * @member {String} productCategory
 */
Product.prototype['productCategory'] = undefined;

/**
 * @member {module:model/UserUserimage} productImage
 */
Product.prototype['productImage'] = undefined;






export default Product;

