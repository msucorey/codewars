def even?(string)
  return string.length % 2 === 0
end

def get_middle_char(string)
  length = string.length
  if even?(string)
    start_char = length / 2
    end_char = start_char + 1
    return string[start_char] + string[end_char]
  else
    return string[length / 2]
  end
end