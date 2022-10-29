alert('请使用该账户进行登录：\n账号：root\n密码：123456')

//实现按下回车登录
function Enter_keydown() {
    if (event.key === "Enter") {
        document.getElementById('login_btn').click();
    }
}

//实现页面跳转
function on() {
    const user_input = document.getElementById('username');
    const password_input = document.getElementById('password');
    //获取输入值并去两端多余空格
    const user_name = user_input.value.trim();
    const password = password_input.value.trim();

    if (user_name === 'root' && password === '123456') {
        alert("正在进入页面...");
        window.location.href = 'index.html';
    } else if (user_name === '' && password === '') {
        alert('您还没有输入账户！');
    } else if (user_name === '' || password === '') {
        alert('登录失败！账号或密码为空');
    } else {
        alert('无效账户！请检查账号或密码是否有误！');
    }
}
