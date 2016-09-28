def hamming(n)
  next_hamming = 1
  i = 1
  powers = [[2, []], [3, []], [5, []]]
  while i < n
    powers.each { |power, set| set << next_hamming * power}
    next_hamming = powers.collect{ |power, set| set.first}.min
    powers.each { |power, set| set.shift if set.first == next_hamming}
    i += 1
  end
  next_hamming
end

puts hamming(18)
puts hamming(36)
puts hamming(72)
