class Sudoku
  def initialize(array_of_arrays)
    @grid = array_of_arrays
    @size = @grid.size
    @little_square_size = Math.sqrt(@size).to_i
    @grid_numbers = Array.new(@size) { |index| index + 1 }
  end

  def is_valid()
    return false if @grid.each.any? { |row| row.size != @size }
    return false if @grid.flatten.any? { |el| el == 0 || !el.is_a?(Integer) || el > @size }
    @grid.each do |row|
      return false if row.uniq != row
    end
    0.upto(@size - 1) do |i|
      col = @grid.map { |row| row[i] }
      return false if col != col.uniq
    end
    0.upto(@little_square_size - 1) do |i|
      offset1 = i * @little_square_size
      0.upto(@little_square_size - 1) do |j|
        offset2 = j * @little_square_size
        this_little_square = []
        0.upto(@little_square_size - 1) do |row|
          0.upto(@little_square_size - 1) do |col|
            this_little_square << @grid[offset1 + row][offset2 + col]
          end
        end
        return false if this_little_square.sort != @grid_numbers
      end
    end
    return true
  end
end

# Valid Sudoku
goodSudoku1 = Sudoku.new([
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],

  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
])

goodSudoku2 = Sudoku.new([
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
])

# Invalid Sudoku
badSudoku1 = Sudoku.new([
  [0,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],

  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],

  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
])

badSudoku2 = Sudoku.new([
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],
  [1]
])

puts goodSudoku1.is_valid()
puts goodSudoku2.is_valid()
puts badSudoku1.is_valid()
puts badSudoku2.is_valid()
