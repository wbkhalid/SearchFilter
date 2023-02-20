const user = document.querySelector('.user-list');
const userName = document.querySelector('#user');
const userArray=[]

const getUserData = async () => {
  try {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    if (data) {
      user.innerHTML = '';
    }
    data.map((users) => {
      const li = document.createElement('li');
      userArray.push(li)
      li.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="user-data">
            <img src=${users.avatar_url} alt=${users.avatar_url}>
            <div>
                <p>${users.login}</p>
                <a href=${users.html_url}>${users.html_url}</a>
            </div>
        </div>
        `
      );
      user.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

userName.addEventListener('input', (e) => {
  const val = e.target.value;
  userArray.filter((curElem) => {
    curElem.innerHTML.toLowerCase().includes(val.toLowerCase())
      ? curElem.classList.remove('hide')
      : curElem.classList.add('hide');
  });
});

getUserData();
