def interpreter code, iterations, width, height
  # Implement your interpreter here
  grid = Array.new(height) { Array.new(width) { 0 } }
  code = code.split("").reverse
  cursor = [0, 0]

  (1..iterations).each do |i|
    next if code.empty?
    command = code.pop
    case command
    when "n"
      cursor[0] -= 1
      cursor[0] %= height
    when "s"
      cursor[0] += 1
      cursor[0] %= height
    when "e"
      cursor[1] += 1
      cursor[1] %= width
    when "w"
      cursor[1] -= 1
      cursor[1] %= width
    when "*"
      grid[cursor[0]][cursor[1]] += 1
    else
      #do something else
    end
  end
  result = []
  grid.each do |row|
    row = row.join("")
    result << row
  end
  puts result.join("\\r\\n")
end

interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9)
# "000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"
# "Your interpreter should initialize all cells in the datagrid to 0"

interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9)
# "111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"),
# "Your interpreter should adhere to the number of iterations specified"

interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9)
# "111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000"
# "Your interpreter should traverse the 2D datagrid correctly"

interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9)
# "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"
# "Your interpreter should traverse the 2D datagrid correctly for all of the \"n\", \"e\", \"s\" and \"w\" commands"

interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9)
# "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"
# "Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands have been considered from left to right even if the number of iterations specified have not been fully performed"
