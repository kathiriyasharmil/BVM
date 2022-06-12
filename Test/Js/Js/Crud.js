let data = [];
let editable = null;

const ClearInputValue = () => {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('country').value = '';
    let language = document.getElementsByName('language');
    let select = [];
    for (i = 0; i < language.length; i++) {
        if (language[i].checked = "") {
            select.push(language[i].value);
        }
    }
}

const validation = () => {
    console.log('validation')
    var nameValidation = /^[A-Z a-z ]+$/;
    var ageValidation = /^[0-9]+$/;
    var emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const name = nameValidation.test(document.getElementById('name').value);
    const age = ageValidation.test(document.getElementById('age').value);
    const email = emailValidation.test(document.getElementById('email').value);
    const number = ageValidation.test(document.getElementById('number').value);

    let gender;
    if (document.getElementById('male').checked) {
        gender = male.value;
    }
    else if (document.getElementById('female').checked) {
        gender = female.value;
    }
    const country = document.getElementById('country').value;

    if (!name) {
        document.getElementById('nameError').innerHTML = 'Please Enter Full Name , no use spacial charctor';
        return false;
    }
    else if (!age) {
        document.getElementById('ageError').innerHTML = 'Please Enter your Age';
        document.getElementById('nameError').innerHTML = '';
        return false;
    }
    else if (!email) {
        document.getElementById('emailError').innerHTML = 'Please Enter your Email Address';
        document.getElementById('ageError').innerHTML = '';
        document.getElementById('nameError').innerHTML = '';
        return false;
    }
    else if (!number) {
        document.getElementById('numberError').innerHTML = 'Please Enter your Phone Number';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = '';
        document.getElementById('nameError').innerHTML = '';
        return false;
    }
    else if (!gender) {
        document.getElementById('genderError').innerHTML = 'Please select your Gender';
        document.getElementById('numberError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = '';
        document.getElementById('nameError').innerHTML = '';
        return false;
    }
    else if (!country) {
        document.getElementById('countryError').innerHTML = 'Please Select your Nationality';
        document.getElementById('genderError').innerHTML = '';
        document.getElementById('numberError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = '';
        document.getElementById('nameError').innerHTML = '';
        return false;
    }
    else {
        return true
    }

}

const languageValidation = (selected) => {
    if (selected.length === 0) {
        document.getElementById('languageError').innerHTML = 'Please select Minimum One language';
        document.getElementById('countryError').innerHTML = '';
        document.getElementById('genderError').innerHTML = '';
        document.getElementById('numberError').innerHTML = '';
        document.getElementById('emailError').innerHTML = '';
        document.getElementById('ageError').innerHTML = '';
        document.getElementById('nameError').innerHTML = '';
        return false;
    } else {
        return true;
    }
}

const ClearValidation = () => {
    debugger
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('ageError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('numberError').innerHTML = '';
    document.getElementById('genderError').innerHTML = '';
    document.getElementById('countryError').innerHTML = '';
    document.getElementById('languageError').innerHTML = '';
}


const delet = (index) => {
    console.log(index, 'delete')
    data.splice(index, 1);
    table();
}

const Submit = () => {
    if (!validation()) return
    if (editable !== null) {
        editData(editable)
    } else {
        const id = data.length + 1

        const SubmitName = document.getElementById('name').value;
        const SubmitAge = document.getElementById('age').value;
        const SubmitEmail = document.getElementById('email').value;
        const SubmitNumber = document.getElementById('number').value;
        let SubmitGender;
        if (document.getElementById('male').checked) {
            SubmitGender = male.value;
        } else if (document.getElementById('female').checked) {
            SubmitGender = female.value;
        }
        const SubmitCountry = document.getElementById('country').value;
        const SubmitLanguage = document.getElementsByName('language');
        let selected = [];
        for (i = 0; i < SubmitLanguage.length; i++) {
            if (SubmitLanguage[i].checked) {
                selected.push(SubmitLanguage[i].value);
            }
        }

        if (!languageValidation(selected)) return

        let datas = { id, SubmitName, SubmitAge, SubmitEmail, SubmitNumber, SubmitGender, SubmitCountry, selected }

        data.push(datas)

        ClearInputValue()
        ClearValidation()
        table()
    }
}

const editData = (index) => {
    const lng = document.getElementsByName('language');
    let select = [];
    for (i = 0; i < lng.length; i++) {
        if (lng[i].checked) {
            select.push(lng[i].value);
        }
    }
    if (!languageValidation(select)) return

    data[index].selected = select;

    data[index].SubmitName = document.getElementById('name').value;
    data[index].SubmitAge = document.getElementById('age').value;
    data[index].SubmitEmail = document.getElementById('email').value;
    data[index].SubmitNumber = document.getElementById('number').value;
    data[index].SubmitCountry = document.getElementById('country').value;

    let change;
    if (document.getElementById("male").checked) {
        change = male.value;
    }
    else if (document.getElementById("female").checked) {
        change = female.value;
    }
    data[index].SubmitGender = change;

    ClearInputValue()
    ClearValidation()
    table()
}

const edit = (index) => {
    document.getElementById("name").value = data[index].SubmitName;
    document.getElementById("age").value = data[index].SubmitAge;
    document.getElementById("email").value = data[index].SubmitEmail;
    document.getElementById('country').value = data[index].SubmitCountry;
    document.getElementById('number').value = data[index].SubmitNumber;

    if (data[index].SubmitGender == "Male") {
        document.getElementById('male').checked = true;
    } else if (data[index].SubmitGender == "Female") {
        document.getElementById('female').checked = true;
    }

    let add = data[index].selected;
    for (i = 0; i < add.length; i++) {
        if (add.includes('English')) {
            document.getElementById('english').checked = true;
        }
        if (add.includes('Gujarati')) {
            document.getElementById('gujarati').checked = true;
        }
        if (add.includes('Hindi')) {
            document.getElementById('hindi').checked = true;
        }
    }

    editable = index;
}

const table = () => {
    $('#body').empty()
    console.log(data, 'table Data')

    return (
        //     <tbody>
        //         <% var i=1 %>
        //         <% data.forEach(item=>{ %>
        //   <tr>
        //   <td><%= i++ %></td>
        //   <td><%= item.name %></td>
        //   <td><%= item.age %></td>
        //   <td><%= item.fees %></td>
        //   <td>
        //     <from action="/student/edit/<%= item._id%>">
        //       <button type="submit">icon</button>
        //     </from>
        //   </td>
        // </tr>
        // <% }) %>
        //     </tbody>


        data.forEach((value, index) => {

            let row = "<tr key={" + index + "}>"
            row += `<td align='center'>` + value.id + `</td>`
            row += `<td align='center'>` + value.SubmitName + `</td>`
            row += `<td align='center'>` + value.SubmitAge + `</td>`
            row += `<td align='center'>` + value.SubmitEmail + `</td>`
            row += `<td align='center'>` + value.SubmitNumber + `</td>`
            row += `<td align='center'>` + value.SubmitGender + `</td>`
            row += `<td align='center'>` + value.SubmitCountry + `</td>`
            row += `<td align='center'>` + value.selected + `</td>`
            row += `<td align='center'>`
            row += "<button style='padding: 10px; line-height: 5px; border-radius: 5px; margin-right: 10px;' onclick='edit(" + index + ")'>Edit</button>"
            row += "<button style='padding: 10px; line-height: 5px; border-radius: 5px;' onclick='delet(" + index + ")'>Delete</button>"
            row += `</td>`

            row += `</tr>`
            $('#body').append(row)

        })
    )
}