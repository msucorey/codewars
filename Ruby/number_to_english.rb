$digits = {
  1 => 'one',
  2 => 'two',
  3 => 'three',
  4 => 'four',
  5 => 'five',
  6 => 'six',
  7 => 'seven',
  8 => 'eight',
  9 => 'nine',
  10 => 'ten',
  11 => 'eleven',
  12 => 'twelve',
  13 => 'thirteen',
  14 => 'fourteen',
  15 => 'fifteen',
  16 => 'sixteen',
  17 => 'seventeen',
  18 => 'eighteen',
  19 => 'nineteen',
}
$tens = {
  1 => 'ten',
  2 => 'twenty',
  3 => 'thirty',
  4 => 'forty',
  5 => 'fifty',
  6 => 'sixty',
  7 => 'seventy',
  8 => 'eighty',
  9 => 'ninety',
}

def bogus?(number)
  !(number.is_a? Integer) | !number.between?(0, 99999)
end

def number_to_english(number, first_pass = true)
  return '' if bogus?(number)
  if (number == 0)
    return first_pass ? 'zero' : ''
  end
  return $digits[number] if number < 20
  if number > 999
    return (number_to_english(number / 1000, false) + ' thousand ' + number_to_english(number % 1000, false)).strip
  end
  if number > 99
    return (number_to_english(number / 100, false) + ' hundred ' + number_to_english(number % 100, false)).strip
  end
  return ($tens[number / 10] + ' ' + number_to_english(number % 10, false)).strip
end

puts(number_to_english(1280))
puts(number_to_english(0))
puts(number_to_english(7))
#  Test.assert_equals( number_to_english(7012), 'seven thousand twelve')
#  Test.assert_equals( number_to_english(99205), 'ninety nine thousand two hundred five')