import { makeAutoObservable } from 'mobx';

interface ITodos {
  id: number;
  title: string;
  status: boolean;
}

export class TodosStore {
  private data: ITodos[];

  constructor() {
    makeAutoObservable(this);
    this.data = [{ id: 1, title: 'title', status: false }];
  }

  public get todos(): ITodos[] {
    return this.data;
  }
}
