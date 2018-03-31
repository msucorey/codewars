def correct_char(char)
  case char
  when '5'
    return 'S'
  when '0'
    return 'O'
  when '1'
    return 'I'
  else
    return 'a'
  end
end

def misinterpreted?(char)
  return false unless ['5', '0', '1'].include?(char)
  true
end

def correct(string)
  result = ''
  string.chars.each do |char|
    if misinterpreted?(char)
      result += correct_char(char)
    else
      result += char
    end
  end
  result
end

puts correct('L0ND0N')