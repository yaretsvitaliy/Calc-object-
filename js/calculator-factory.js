function Calculator() {
    this.result = document.querySelector('#result');
    this.numberButtons = document.querySelectorAll('.number');
    this.clearBtn = document.querySelector("#clear");
    this.operationButtons = document.querySelectorAll('.operation');
    this.equally = document.querySelector('#equally');
    this.numberOne = '';
    this.operation = '';
    this.numberTwo = '';

    Calculator.prototype.onClear = function (e) {
        this.result.innerHTML = '';
    };

    Calculator.prototype.numberButtonClickListener = function (e) {
        if (this.operation === '') {
            this.numberOne += e.currentTarget.value;
            this.result.innerHTML = this.numberOne;
        } else {
            this.result.innerHTML = '';
            this.numberTwo += e.currentTarget.value;
            this.result.innerHTML = this.numberTwo;
        }
    };

    Calculator.prototype.operationButtonClickListener = function (e) {
        this.operation = e.currentTarget.value;
    };

    Calculator.prototype.resultButtonClickListener = function (sign) {
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

    Calculator.prototype.commonOperation = function (sign) {
        this.resultButtonClickListener(this.operation);
    };

    Calculator.prototype.init = function () {
        let that = this;


        for (let i = 0; i < this.numberButtons.length; i++) {
            this.numberButtons[i].addEventListener("click", function (e) {
                that.numberButtonClickListener(e);
            });
        }
        for (let i = 0; i < this.operationButtons.length; i++) {
            this.operationButtons[i].addEventListener("click", function (e) {
                that.operationButtonClickListener(e);  // клик по числовым кнопкам
            });
        }
        this.equally.addEventListener('click', function (e) {
            that.commonOperation(e);
        });
        this.clearBtn.addEventListener('click', function (e) {
            that.onClear(e);
        });
    };
}



