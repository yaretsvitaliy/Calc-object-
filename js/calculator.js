class Calculator {
    constructor() {
        this.result = document.querySelector('#result');
        this.numberButtons = document.querySelectorAll('.number');
        this.clearBtn = document.querySelector("#clear");
        this.operationButtons = document.querySelectorAll('.operation');
        this.equally = document.querySelector('#equally');
        this.numberOne = '';
        this.operation = '';
        this.numberTwo = '';
    }
    onClear(e) {
        this.result.innerHTML = '';
    };

    numberButtonClickListener(e)  {
        if (this.operation === '') {
            this.numberOne += e.currentTarget.value;
            this.result.innerHTML = this.numberOne;
        } else {
            this.result.innerHTML = '';
            this.numberTwo += e.currentTarget.value;
            this.result.innerHTML = this.numberTwo;
        }
    };

    operationButtonClickListener(e) {
        this.operation = e.currentTarget.value;
    };

    resultButtonClickListener(sign) {
        let res = 0;
        if (sign === '+') {
            res = Number(this.numberOne) + Number(this.numberTwo);
        } else if (sign === '-') {
            res = Number(this.numberOne) - Number(this.numberTwo);
        } else if (sign === '*') {
            res = Number(this.numberOne) * Number(this.numberTwo);
        } else if (sign === '/') {
            res = Number(this.numberOne) / Number(this.numberTwo);
        }
        this.result.innerHTML = res;
    };

    commonOperation(e) {
        this.resultButtonClickListener(this.operation);
    };

    init() {
        for (let i = 0; i < this.numberButtons.length; i++) {
            this.numberButtons[i].addEventListener("click", e=> this.numberButtonClickListener(e))
        }
        for (let i = 0; i < this.operationButtons.length; i++) {
            this.operationButtons[i].addEventListener("click", e=> this.operationButtonClickListener(e));
        }
        this.equally.addEventListener('click', e=> this.commonOperation(e));
        this.clearBtn.addEventListener('click', e=> this.onClear(e));
    }
}