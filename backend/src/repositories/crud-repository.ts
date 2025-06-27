export class CrudRepository<T extends{
    create:any;
    findMany:any;
    findUnique:any;
    update:any;
    delete:any;
}>
{
    protected model:T;

    constructor(model:T){
        this.model=model;
    }

    async create(data:any){
        return this.model.create({data})
    };

    async findAll(){
        return this.model.findMany();
    }

    async findById(id:number){
        return this.model.findUnique({
            where:{
                id
            }
        })
    }
    async update(id: number, data: any) {
        return this.model.update({ where: { id }, data });
    }

  async delete(id: number) {
        return this.model.delete({ where: { id } });
    }

}