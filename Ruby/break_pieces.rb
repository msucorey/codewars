def piece(shape, i, j)
  direction = 0
  start = [i, j]
  pos = [i, j + 1]
  vertices = [start]
  until pos == start
    return nil unless shape[pos[0]] && shape[pos[0]][pos[1]]
    if shape[pos[0]][pos[1]] == "+"
      vertices << [pos[0] + 0, pos[1] + 0]
      puts "added " + pos[0].to_s + " and " + pos[1].to_s
      direction += 1
      direction %= 4
    end
    case direction
    when 0
      pos[1] += 1
    when 1
      pos[0] += 1
    when 2
      pos[1] -= 1
    when 3
      pos[0] -= 1
    end
  end
  vertices.sort
end

def break_pieces(shape)
  result = []
  lines = shape.split("\n")
  height = lines.length
  width = lines.first.length
  lines.each_with_index do |line, i|
    line.chars.each_with_index do |char, j|
      if char == "+"
        result << piece(lines, i, j)
      end
    end
  end
  p result.uniq
end

shape = ["+------------+",
         "|            |",
         "|            |",
         "|            |",
         "+------+-----+",
         "|      |     |",
         "|      |     |",
         "+------+-----+"].join("\n")

solution = [["+------------+",
             "|            |",
             "|            |",
             "|            |",
             "+------------+"].join("\n"),
            ["+------+",
             "|      |",
             "|      |",
             "+------+"].join("\n"),
            ["+-----+",
             "|     |",
             "|     |",
             "+-----+"].join("\n")]

break_pieces(shape)
