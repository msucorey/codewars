def list names
  output = ""
  return output if names.empty?
  output << names.first[:name]
  return output if names.size == 1
  1.upto(names.length - 2) { |i| output << ", #{names[i][:name]}"}
  output << " & #{names.last[:name]}"
  output
end

puts list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
puts list([{name: 'Bart'},{name: 'Lisa'}])
puts list([{name: 'Bart'}])
