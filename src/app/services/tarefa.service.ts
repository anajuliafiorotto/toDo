import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefaCollection: any[]=[];
  key = 'tarefaCollection';

  constructor() { }

  salvar(tarefa: any, callback=null){
    tarefa.feito = false;
    const value = localStorage.getItem(this.key);

    if(value==null || value==undefined){
      this.tarefaCollection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.tarefaCollection));
    }
    else {
      const collection: any[] = JSON.parse(value);
      collection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if(callback!=null){
      callback();
    }
  }

  listar(){
    const value = localStorage.getItem(this.key);

    if(value==null || value==undefined){
      return [];
    }

    const collection: any[] = JSON.parse(value);

    return collection;
  }

  delete(tarefa: any, callback=null){

    const value = localStorage.getItem(this.key);

    if(value==null || value==undefined){
      return;
    }

    const collection: any[] = JSON.parse(value);

    const resultCollection = collection.filter(item=>item.tarefa != tarefa.tarefa);

    localStorage.setItem(this.key, JSON.stringify(resultCollection));

    if(callback!=null){
      callback();
    }
  }

  atualizar(tarefa: any, callback=null){
    const value = localStorage.getItem(this.key);

    if(value==null || value==undefined){
      return;
    }
    else {
      const collection: any[] = JSON.parse(value);

      collection.forEach(item=>{
        if(item.tarefa == tarefa.tarefa) {
          item.feito = tarefa.feito;
        }
      });

      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if(callback!=null){
      callback();
    }
  }
}
