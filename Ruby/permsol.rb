require 'byebug'

def shuffle_in_place(string)
  case string.length
  when 0
    return []
  when 1
    return [string]
  when 2
    return [string, string.reverse]
  end
  output = []
  string.chars.each do |char|
    0.upto(string.length - 1) do |i|
      if i == 0
        substring = string[1..(string.length - 1)]
      elsif i == (string.length - 1)
        substring = string[0..(string.length - 2)]
      else
        substring = string[0..(i - 1)] + string[(i + 1)..(string.length - 1)]
      end
      next if (substring.count(char)) + 1 > string.count(char)
      sub_shuffles = shuffle_in_place(substring)
      this_output = sub_shuffles
      this_output.each_index do |j|
        if i > j
          this_output[j] << char
        else
          this_output[j].insert(i, char)
        end
      end
      output += this_output
    end
  end
  output
end

def permsol(string)
  shuffle_in_place(string).uniq.sort
end

p permsol('a')
p permsol('ab')
p permsol('jogicw')
