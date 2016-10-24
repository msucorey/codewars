def count_digits(number)
  array_result = Array.new(10,0)
  number.to_s.chars.each do |char|
    array_result[char.to_i] += 1
  end
  array_result
end

def biggest_pal_from(number)
  result_string_back = ""
  digit_count = count_digits(number)
  (0..9).each do |i|
    while digit_count[i] > 1
      result_string_back << i.to_s
      digit_count[i] -= 2
    end
  end
  result_string_back = "" if result_string_back.to_i == 0
  i = 9
  middle_digit_found = false
  middle_digit = ""
  while (i > 0)  && !middle_digit_found
    if digit_count[i] == 1
      middle_digit = i.to_s
      middle_digit_found = true
    end
    i -= 1
  end
  (result_string_back.reverse + middle_digit + result_string_back).to_i
end

def numeric_palindrome(*args)
  #your code here
  biggest_pal_so_far = 0
  args = *args - [0]
  products = []
  for n in (2..args.length)
    args.combination(n).each do |operands|
      products << operands.reduce(:*)
    end
  end
  products.each do |product|
    this_pal = biggest_pal_from(product)
    if this_pal > biggest_pal_so_far
      biggest_pal_so_far = this_pal
    end
  end
  biggest_pal_so_far
end

puts numeric_palindrome(937,113)
puts numeric_palindrome(657,892)
puts numeric_palindrome(87, 3, 62, 80, 17, 55, 0)
puts numeric_palindrome(21, 99, 84978, 4, 4278, 402, 64, 82800, 5236, 48460)

#It should work for random tests too - Expected: 4108014, instead got: 40704
