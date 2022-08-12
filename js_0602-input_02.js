// $(function() {

    let userId = document.querySelector('#user_id')
    let nicName = document.querySelector('#user_nic_name')
    let userPw1 = document.querySelector('#user_password_01')
    let userPw2 = document.querySelector('#user_password_02')

    userId.onchange = checkId
    nicName.onchange = checkNicName
    userPw1.onchange = checkPw1
    userPw2.onchange = checkPw2

    function checkId() {
        if(user_id.value.length < 8 || user_id.value.length > 16) {
            alert('아이디는 8~16자로 작성해주세요')
            userId.value = ''
            userId.focus()
        }
    }

    function checkNicName() {
        if(user_nic_name.value.length < 3 || user_nic_name.value.length > 10) {
            alert('닉네임은 3~10자로 작성해주세요')
            nicName.value = ''
            nicName.focus()
        }
    }

    function checkPw1() {
        if(user_password_01.value.length < 8) {
            alert('비밀번호는 8자 이상으로 작성해주세요')
            userPw1.value = ''
            userPw1.focus()
        }
    }

    function checkPw2() {
        if(userPw1.value != userPw2.value) {
            alert('비밀번호를 다시 확인해주세요')
            userPw2.value = ''
            userPw2.focus()
        }
    }


    
    let userPw2 = document.querySelector('#user_pw2')

    userPw2.onchange = comparePw

    function comparePw() {
        if(userPw1.value != userPw2.value) {
            alert('암호가 다릅니다. 다시 입력해주세요!')
        }
        userPw2.value = ''
        userPw2.focus()
    }






// })





























}