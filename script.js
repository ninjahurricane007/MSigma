const response=fetch('https://api.msigma.in/btech/v2/branches/')
  .then(response => response.json())
  .then(response => {
    const users=[];
    response.branches.forEach(element => {
        users.push(element);
    });
    const left=document.querySelector(".left");
    const right=document.querySelector(".right");
    for(let i=0;i<=20;i++)
    {
        let colours=["red", "green", "blue", "pink", "violet", "orange"];
        let diffcolor=colours[Math.floor(Math.random()* colours.length)];

        const card = document.createElement('div');
        card.classList.add('card');

        const short = document.createElement('h3');
        short.classList.add('short');
        short.style.color=diffcolor;

        const name = document.createElement('p');
        name.classList.add('name');
  
        const button=document.createElement('a');
        button.classList.add('btn');
        short.style.color=diffcolor;

        const fee=document.createElement('p');
        fee.classList.add('fee');


        short.textContent=`${users[i].short}`;
        name.textContent=`${users[i].name}`;
        button.textContent="Apply Now";
        fee.textContent="Fee starting at ₹799 per subject";

        card.appendChild(short);
        card.appendChild(name);
        card.appendChild(button);
        card.appendChild(fee);

        if(i%2==0){
            left.appendChild(card);
        }
        else{
            right.appendChild(card);
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

