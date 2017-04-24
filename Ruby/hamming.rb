def hamming(n)
  perm_cap = Math.sqrt(n).to_i
  numbers = []
  0.upto(perm_cap + 1) do |i|
    0.upto(perm_cap) do |j|
      0.upto(perm_cap / 2) do |k|
        numbers << 2**i * 3**j * 5**k
      end
    end
  end
  numbers.sort[n - 1]
end

puts hamming(18)
puts hamming(36)
puts hamming(72)
