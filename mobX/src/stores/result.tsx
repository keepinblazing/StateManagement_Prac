import { observable } from "mobx";

interface Result {
  result: number;
  resultMode: (mode: number) => void;
  resultAvg: (avg: number) => void;
}

const Result = observable<Result>({
  result: 0,

  resultMode(mode) {
    this.result = 0
    this.result += mode;
  },

  resultAvg(avg) {
    this.result = 0
    this.result += avg
  }

});

export { Result };
