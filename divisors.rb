def divisors(n)
  #your code here
  divisors = []
  2.upto(n/2) { |i| divisors << i if n % i == 0 }
  divisors.count > 0 ? divisors : "#{n} is prime"
end

p divisors(15)
p divisors(253)
p divisors(24)
p divisors(25)
p divisors(13)
