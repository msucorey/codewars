def maskify(cc)
  # your beautiful code goes here
  masked_string = ""
  cc_length = cc.length
  if cc_length < 5
    return cc
  end
  0.upto(cc_length - 5) do
    masked_string << "#"
  end
  (cc_length - 4).upto(cc_length - 1) do |i|
    masked_string << cc[i]
  end
  masked_string
end

puts maskify('4556364607935616')
puts maskify('1')
puts maskify('11111')
