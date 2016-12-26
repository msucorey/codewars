def persistence(n)
    # your code
    if n < 10
      0
    else
      result = n.to_s.chars.inject(1) { |product, n| product * n.to_i }
      1 + persistence(result)
    end
end

puts persistence(39)
puts persistence(4)
puts persistence(25)
puts persistence(999)
