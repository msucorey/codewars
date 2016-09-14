def all_scrambles(string)
  length = string.length
  return [] if length == 0
  return [string] if length == 1
  return [string, string.reverse] if length == 2
  output = []
  0.upto(length - 1) do |i|
    all_scrambles(string[1...length]).each do |word|
      output += [string[0] + word]
    end
    char = string[0]
    string = string[1..(length - 1)] + char
  end
  output
end

def permsol(string)
  all_scrambles(string).uniq.sort
end

p permsol('a')
p permsol('ab')
p permsol('ghimqsv')
