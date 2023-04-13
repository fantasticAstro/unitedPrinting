// Local Imports
import request from './request';

/**
 * Sends a quote request email.
 *
 * @param {string} name Customer name.
 * @param {string} email Customer email.
 * @param {string} phone Customer phone number.
 * @param {string} companyName Customer company name.
 * @param {string} description Order description.
 * @param {string} stock Order stock type.
 * @param {string} colorsFront Order colors front.
 * @param {string} colorsBack Order colors back.
 * @param {string} proofType Order proof type.
 * @param {string} shipping Order shipping.
 */
const requestQuote = async (
  name: string,
  email: string,
  phone: string,
  companyName: string,
  description: string,
  stock: string,
  colorsFront: string,
  colorsBack: string,
  proofType: string,
  shipping: string,
): Promise<boolean> => {
  try {
    const parms = new URLSearchParams(Object.entries({
      name,
      email,
      phone,
      companyName,
      description,
      stock,
      colorsFront,
      colorsBack,
      proofType,
      shipping,
    }));

    await request.get(`/request-quote?${parms.toString()}`);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export default {
  requestQuote,
};
