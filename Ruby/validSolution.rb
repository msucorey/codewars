#!/usr/bin/env ruby

#wait this is a comment

def validSolution(board)
  return false if board.flatten.size != 81
  return false if board.flatten.any? { |el| el.class != Fixnum }
  return false if board.size != 9
  board.each do |row|
    return false if row.any? { |el| el < 1 || el > 9 }
    return false if row.uniq.size != 9
  end
  (0..8).each do |col|
    this_col = []
    (0..8).each do |el|
      this_col << board[el][col]
    end
    return false if this_col.uniq.size != 9
  end
  [-1, 2, 5].each do |xoffset|
    [-1, 2, 5].each do |yoffset|
      this_square = []
      (1..3).each do |x|
        (1..3).each do |y|
          this_square << board[x + xoffset][y + yoffset]
        end
      end
      return false if this_square.uniq.size != 9
    end
  end
  true
end

puts validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]])#, true);

puts validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]])#, false);
