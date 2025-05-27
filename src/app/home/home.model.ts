export class Home {
  constructor(
    public id: string,
    public fullName: string,
    public tel: number,
    public price: number,
    public newDate: Date,
    public imgurl: string,
    public userId: string,
    public soldTotal: number[]
  ) {}
}
