/**
Lyrics...
Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function longestSlideDown (in ruby/crystal/julia: longest_slide_down) that takes a pyramid representation as argument and returns its' largest 'slide down'. For example,

longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23
By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

@see https://www.codewars.com/kata/551f23362ff852e2ab000037/
 */

const longestSlideDown: any =  (pyramid: Array<Array<number>>) => {
  const topOfPyramid = pyramid[0][0];
  const pyramidHeight = pyramid.length;
  if (pyramidHeight === 1) return topOfPyramid;
  if (pyramidHeight === 2) return topOfPyramid + Math.max(...pyramid[1]);

  const oldBottomRow = pyramid.pop() || [];
  const newBottomRow = pyramid.pop()?.map((element, index) => element + Math.max(oldBottomRow?.[index], oldBottomRow?.[index + 1]));

  return longestSlideDown(pyramid.concat([newBottomRow || []]));
}

export { longestSlideDown };
