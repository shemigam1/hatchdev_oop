class Array_Defcon1 {
    public arr: Array<any>;
    constructor(arr: Array<any>) {
        this.arr = arr
    }


    public to_string() {
        let str = ''
        // console.log(str);

        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i]
        }
        console.log(str);


        return str
    }

    public get_length() {
        let i = 0;
        while (this.arr[i] !== undefined) {
            i++
        }
        return i
    }

    public join_to_str(token: string) {
        let str = ''
        for (let i = 0; i < this.arr.length - 1; i++) {
            str += this.arr[i] += token;
        }
        return str += this.arr[this.arr.length - 1]
    }

    public index_of(token: any) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === token) {
                return i
            }
        }
        return -1
    }

    public includes_tok(token: any) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === token) {
                return true
            }
        }
        return false
    }

    public push_to_arr(token: any) {
        this.arr[this.arr.length] = token
    }

    public pop_from_arr() {
        if (this.arr.length === 0) {
            return undefined
        }
        const lastElement = this.arr[this.arr.length - 1]
        this.arr.length = this.arr.length - 1
        return lastElement
    }

    public shift_from_arr() {
        if (this.arr.length === 0) {
            return undefined
        }
        const firstElement = this.arr[0]
        for (let i = 0; i < this.arr.length - 1; i++) {
            this.arr[i] = this.arr[i + 1]
        }
        this.arr.length = this.arr.length - 1
        return firstElement
    }

    public sort_arr() {
        for (let i = 0; i < this.arr.length - 1; i++) {
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) {
                    const temp = this.arr[i]
                    this.arr[i] = this.arr[j]
                    this.arr[j] = temp
                }
            }
        }
        return this.arr
    }

    public map_arr(callback: (value: any, index: number, array: Array<any>) => any) { }
}

const teslim = new Array_Defcon1([1, 2, 3, 4, 5])
// console.log(teslim);


console.log(teslim.join_to_str(" + "));
