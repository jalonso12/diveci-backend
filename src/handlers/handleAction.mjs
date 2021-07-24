import v from 'voca';

export const ASSETS_PREFIX = 'TEC-';
export const BEER_PREFIX = 'CVZ-';
export const CASHIER_PREFIX = 'CJS-';
export const CHECK_PREFIX = 'FAC-';
export const CLIENT_PREFIX = 'CLI-';
export const COUNTRY_PREFIX = 'P-';
export const HYGIENE_PREFIX = 'LH-';
export const LIQUOR_PREFIX = 'L-';
export const LOGS_PREFIX = 'LOG-';
export const MEAL_PREFIX = 'COM-';
export const BEVERAGE_PREFIX = 'B-';
export const PACKAGING_PREFIX = 'DE-';
export const PROVIDER_PREFIX = 'PRO-';
export const PROD_PROVIDER_PREFIX = 'PPO-'; // Does not use idTag, must change
export const RESTAURANT_PREFIX = 'RES-';
export const ROLE_PREFIX = 'ROL-';
export const TABLE_PREFIX = 'ME-';
export const TABLEWARE_PREFIX = 'EU-';
export const USER_PREFIX = 'USU-';
export const WINE_PREFIX = 'VN-';

const generateObject = (title, prefix, value, type) => {
  console.log('Generating your object...');

  return {
    tag: `${prefix}${value + 1}`,
    value: value + 1,
    prefix,
    type: v.capitalize(type),
    description: `Identificador de ${type} ${title}`,
  };
};

export function prefixSelector(title, prefix, value) {
  let newIdTag = {};

  switch (prefix) {
    case ASSETS_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'activo');
      break;
    case BEER_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'cerveza');
      break;
    case CASHIER_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'caja');
      break;
    case CHECK_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'factura');
      break;
    case CLIENT_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'cliente');
      break;
    case COUNTRY_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'pais');
      break;
    case HYGIENE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'limpieza');
      break;
    case LIQUOR_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'licor');
      break;
    case LOGS_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'logs');
      break;
    case MEAL_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'plato');
      break;
    case BEVERAGE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'bebida');
      break;
    case PACKAGING_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'empaque');
      break;
    case PROVIDER_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'proveedor');
      break;
    case PROD_PROVIDER_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'producto de proveedor');
      break;
    case RESTAURANT_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'restaurante');
      break;
    case ROLE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'rol');
      break;
    case TABLE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'mesa');
      break;
    case TABLEWARE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'utensilios');
      break;
    case USER_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'usuario');
      break;
    case WINE_PREFIX:
      newIdTag = generateObject(title, prefix, value, 'vino');
      break;
    default:
      return null;
  }

  return newIdTag;
}
