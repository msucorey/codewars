=begin
Create a RomanNumerals helper that can convert a roman numeral to and from an
integer value. The class should follow the API demonstrated in the examples
below. Multiple roman numeral values will be tested for each helper method.
Modern Roman numerals are written by expressing each digit separately starting
with the left most digit and skipping any digit with a value of zero. In Roman
numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in
descending order: MDCLXVI.
Examples:
RomanNumerals.to_roman(1000) # should return 'M'
RomanNumerals.from_roman('M') # should return 1000
=end

class RomanNumerals

def self.thousands(n)
  result = ""
  n.times { |i| result += "M"}
  return result
end

def self.hundreds(n)
  return "" if n == 0
  case n
  when 1, 2, 3
    return Array.new(n, "C").join
  when 4
    return "CD"
  when 9
    return "CM"
  else
    return "D" + hundreds(n - 5)
  end
end

def self.tens(n)
  return "" if n == 0
  case n
  when 1, 2, 3
    return Array.new(n, "X").join
  when 4
    return "XL"
  when 9
    return "XC"
  else
    return "L" + tens(n - 5)
  end
end

def self.ones(n)
  return "" if n == 0
  case n
  when 1, 2, 3
    return Array.new(n, "I").join
  when 4
    return "IV"
  when 9
    return "IX"
  else
    return "V" + ones(n - 5)
  end
end

def self.to_roman(n)
  result = ""
  result << thousands(n / 1000)
  n %= 1000
  result << hundreds(n / 100)
  n %= 100
  result << tens(n / 10)
  n %= 10
  result << ones(n)
end

def self.from_roman(rom_nums)
  digit_values = []
  rom_nums.chars.each do |numeral|
    case numeral
    when "M"
      digit_values << 1000
    when "D"
      digit_values << 500
    when "C"
      digit_values << 100
    when "L"
      digit_values << 50
    when "X"
      digit_values << 10
    when "V"
      digit_values << 5
    when "I"
      digit_values << 1
    end
  end
  result = 0
  digit_values.each_index do |i|
    if i == digit_values.count - 1
      result += digit_values[i]
    elsif digit_values[i] < digit_values[i + 1]
      result -= digit_values[i]
    else
      result += digit_values[i]
    end
  end
  result
end

end


p RomanNumerals.to_roman(4)
p RomanNumerals.from_roman("M")
