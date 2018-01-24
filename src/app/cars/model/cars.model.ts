export class CarModel {
    ItemId: string
    Name: string 
    LicenseNo: string
    constructor (ItemId: string, Name: string, LicenseNo: string){
        this.ItemId = ItemId;
        this.Name = Name;
        this.LicenseNo = LicenseNo;
    } 
}