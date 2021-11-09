// You are climbing a staircase. It takes n steps to reach the top.
//
//     Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
    return n <= 1 ? n : climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(6))
