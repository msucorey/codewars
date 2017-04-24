def sum_two_smallest_numbers(numbers)
  #Your code here
  smallest = numbers.min
  smallest_maxed = false
  numbers.each_with_index do |number, i|
    if number == numbers.min && !smallest_maxed
      numbers[i] = numbers.max
      smallest_maxed = true
    end
  end
  second_smallest = numbers.min
  smallest + second_smallest
end

puts sum_two_smallest_numbers([5, 8, 12, 18, 22])
puts sum_two_smallest_numbers([7, 15, 12, 18, 22])
puts sum_two_smallest_numbers([25, 42, 12, 18, 22])
