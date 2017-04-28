def rotate_paper(number)
  return true if [0, 2, 5, 8].include?(number.to_i)
  num_str = number
  return false if num_str.length == 1
  first = num_str[0].to_i
  last = num_str[-1].to_i
  if (first == last && rotate_paper(first.to_s)) || first * last == 54
    sub_str = num_str[1..-2]
    return true if sub_str.empty?
    return rotate_paper(sub_str)
  end
  false
end

puts rotate_paper("000") #true
puts rotate_paper("1") #false
puts rotate_paper("96") #true
puts rotate_paper("689") #true
puts rotate_paper("56789") #false
