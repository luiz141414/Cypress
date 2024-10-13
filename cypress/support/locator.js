
const locators = {
    paginaHome:  {
        btnSignupLogin : '.shop-menu >.nav > :nth-child(4) > a',
        fieldName : '[data-qa="signup-name"]',
        fieldEmail : '[data-qa="signup-email"]',
        
        btnsignup : '[data-qa="signup-button"]'
    },
    paginaForm : {
        mrCheckbox: '#id_gender1',
        fildPassword : '[data-qa="password"]',
        fieldfirstName : '[data-qa="first_name"]',
        fieldLastName : '[data-qa="last_name"]',
        fildCompany : '[data-qa="company"]',
        fieldAddress : '[data-qa="address"]',
        fildCountry : '[data-qa="country"]',
        fieldState : '[data-qa="state"]',
        fieldCity : '[data-qa="city"]',
        fildZipCode : '[data-qa="zipcode"]',
        fieldMobileNumber : '[data-qa="mobile_number"]',
        btnCreateAccount : '[data-qa="create-account"]'
       
        
    }
  

}
export default locators