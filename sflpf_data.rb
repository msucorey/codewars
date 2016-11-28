require 'prime'

def sum_fl_prime_factors(n)
  return 0 if n == 1
  return 0 if Prime.prime?(n)
  factors = Prime.prime_division(n)
  return factors.first[0] + factors.last[0]
end

def sflpf_data(k, nMax)
  matches = []
  4.upto(nMax) do |n|
    matches << n if sum_fl_prime_factors(n) == k
  end
  matches.sort
end

puts sflpf_data(10, 100)#, [21, 25, 63])
puts sflpf_data(10, 200)#, [21, 25, 63, 105, 125, 147, 189])
puts sflpf_data(15, 150)#, [26, 52, 78, 104, 130])
puts sflpf_data(501, 1000)#, [998])
puts sflpf_data(501, 5000)#, [998, 1996, 2994, 3992, 4990])
