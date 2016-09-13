def convert(input, source, target)
  source_base = source.length
  target_base = target.length
  input_in_base_10 = 0
  0.upto(input.length - 1) do |place|
    power = input.length - place - 1
    input_in_base_10 += source.index(input[place]) * source_base**power
  end
  return target[0] if input_in_base_10 == 0
  output = ""
  while input_in_base_10 > 0
    output << target[input_in_base_10 % target_base]
    input_in_base_10 /= target_base
  end
  output.reverse
end

bin='01'
oct='01234567'
dec='0123456789'
hex='0123456789abcdef'
allow='abcdefghijklmnopqrstuvwxyz'
alup='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
alpha='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
alphanum='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

puts convert("15", dec, bin)
puts convert("15", dec, oct)
puts convert("1010", bin, dec)
puts convert("1010", bin, hex)
puts convert("0", dec, alpha)
puts convert("27", dec, allow)
puts convert("hello", allow, hex)
puts convert("SAME", alup, alup)
