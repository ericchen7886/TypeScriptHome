export interface MultiInputState {
    data: GridData[];
    editId;
    errorOpen: boolean;
    errorMsg: string[];
}

export interface GridData {
    ProductID: number;
    ProductName?: string;
    FirstOrderedOn?: Date;
    UnitsInStock?: number;
    inEdit: boolean;
}
