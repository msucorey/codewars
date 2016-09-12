def triple_double(num1,num2)
  triples_in_1 = Hash.new(false)
  doubles_in_2 = Hash.new(false)
  0.upto(9) do |i|
    triple = i.to_s * 3
    double = i.to_s * 2
    triples_in_1[i] = true if num1.to_s.match(triple)
    doubles_in_2[i] = true if num2.to_s.match(double)
  end
  found_in_both = (0..9).any? { |key| triples_in_1[key] && doubles_in_2[key] }
  found_in_both ? 1 : 0
end

puts triple_double(451999277, 41177722899)
puts triple_double(1222345, 12345)
puts triple_double(12345, 12345)
puts triple_double(666789, 12345667)
puts triple_double(10560002, 100)
