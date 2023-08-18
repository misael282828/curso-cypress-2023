import { placeOrderElements } from "./place-order.elements";

export class placeOrderMethods{

  static inserName(name){
    placeOrderElements.textboxes.name.invoke('val',name)
  }

  static inserContry(contry){
    placeOrderElements.textboxes.contry.invoke('val',contry)
  }

  static inserCity(city){
    placeOrderElements.textboxes.city.invoke('val',city)
  }

  static inserCreditCard(creditCard){
    placeOrderElements.textboxes.creditCard.invoke('val',creditCard)
  }

  static inserMonth(month){
    placeOrderElements.textboxes.month.invoke('val',month)
  }

  static inserYear(year){
    placeOrderElements.textboxes.year.invoke('val',year)
  }

  static clickOnCloseButton(){
    placeOrderElements.buttons.close.click()
  }

  static clickOnPurchaseButton(){
    placeOrderElements.buttons.purchase.click()
  }

  static inserOrderInformation(data){
    this.inserName(data.name)
    this.inserCity(data.city)
    this.inserContry(data.contry)
    this.inserCreditCard(data.creditCardNumber)
    this.inserMonth(data.month)
    this.inserYear(data.year)
  }




}