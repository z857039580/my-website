import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

// 定义表单
  loginForm: FormGroup;
// 表单验证不通过时显示的错误消息
  formErrors = {
    username: '',
    password: ''
  };
// 为每一项表单验证添加说明文字
  validationMessage = {
    username: {
      minlength: '用户名长度最少为6个字符',
      maxlength: '用户名长度最多为16个字符',
      required: '请填写用户名',
      notdown: '用户名不能以下划线开头',
      only: '用户名只能包含数字、字母、下划线'
    },
    password: {
      required: '请填写密码',
      minlength: '密码长度最少为6个字符',
      maxlength: '密码长度最多为16个字符',
      notdown: '密码不能以下划线开头',
      only: '密码只能包含数字、字母、下划线'
    }
  };

// 添加 fb 属性，用来创建表单
  constructor(private fb: FormBuilder,
              public loginService: LoginService) {
  }

  ngOnInit() {
    // 初始化时构建表单
    this.buildForm();
  }

// 构建表单方法
  buildForm(): void {
    // 通过 formBuilder构建表单
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(6),
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(6),
      ]]
    });

    // 每次表单数据发生变化的时候更新错误信息
    this.loginForm.valueChanges
      .subscribe(data => {
        this.onValueChanged(data);
      });
  }


// 每次数据发生改变时触发此方法
  onValueChanged(data?: any) {
    // 获取当前的表单
    const form = this.loginForm;
    for (let controlKey in form.controls) {
      // 清空当前的错误消息
      this.formErrors[controlKey] = '';
      // 获取当前表单的控件
      const control = form.get(controlKey);
      // 当前表单存在此空间控件 && 此控件验证不通过 && 此控件被修改过control.dirty
      if (control && !control.valid) {
        for (const errKey in control.errors) {
          // 把所有验证不通过项的说明文字拼接成错误消息
          this.formErrors[controlKey] += this.validationMessage[controlKey][errKey];
        }
      }
    }
  }

  onSubmit() {
    this.loginForm.setValue({username: 'kevin222', password: '123456'});

    this.loginService.login(this.loginForm.value).subscribe((res) => {
      console.log(res)
    })
  }


}
