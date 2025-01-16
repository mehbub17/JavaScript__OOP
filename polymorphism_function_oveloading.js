

function add(...args)
{   let ans = 0;
    args.forEach(num => ans+=num);
    console.log(`Addition: ${ans}\n`);
}


add(4,5);
add(3,4,5);


