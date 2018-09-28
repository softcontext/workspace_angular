import { FormControl } from '@angular/forms';

export class InputValidator {
  // 데코레이터 없다. 인터페이스도 없다.
  // 함수는 개발자 마음대로 작성할 수 있다는 의미가 된다.
  // 단, FormControl 객체를 파라미터로 받는다.
  // 그리고, { 함수명: 불린값 } 형태의 객체를 리턴해야 한다.
  static startWithNumber(control: FormControl) {
    // 값이 숫자면 true
    let valid = /^\d/.test(control.value);

    if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {
      // 데이터가 원하는 작성규칙에 위반되면 true를 리턴합니다.
      return { startWithNumber: true };
    }

    return null;
  }
}
