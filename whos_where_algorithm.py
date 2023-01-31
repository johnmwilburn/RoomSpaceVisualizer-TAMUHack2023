POPULATION_SCALING_CONSTANT = 2

P = [[100, 1, 0, 1, -1, 1, -1, 0, -1, 0, 1],
     [1, 100, 1, -1, 1, 0, 0, -1, -1, -1, 0],
     [1, 1, 100, -1, -1, -1, 0, -1, -1, -1, 1],
     [0, -1, 0, 100, -1, -1, -1, -1, -1, 1, -1],
     [1, 1, 1, 1, 100, -1, -1, -1, 0, 0, 0],
     [0, -1, -1, -1, -1, 100, 1, 0, -1, 1, -1],
     [1, 1, 1, 1, 1, 1, 100, -1, -1, 0, 0],
     [1, 0, -1, 0, -1, -1, -1, 100, -1, 1, 0],
     [1, 0, -1, -1, 1, -1, -1, -1, 100, 0, -1],
     [-1, 1, -1, 0, 0, 1, 1, 0, -1, 100, 1],
     [1, 0, 0, 1, 1, 0, 0, -1, 0, 0, 100]]


class Team:
    def __init__(self, index, size):
        self.index = index  # index represents the position of the team (from 0 to n-1) - ith team represents the ith row in the preference matrix P
        self.size = size  # size represents the number of people in the team

    def __str__(self):
        return f'(Team {self.index + 1}: {self.size} people)'

    def compatibility_with_team(self, another_team):
        """
        CALCULATES THE COMPATIBILITY OF THE TEAM WITH ANOTHER TEAM

        INPUT:
            - another_team: Another team of class Team

        OUTPUT:
            - W: An integer which represents how good of an idea it would be to put the team with the other

        NOTES:
            - P represents the preference matrix, which represents how much teams prefer each other
        """

        global P

        W = (self.size * P[self.index][another_team.index]) + (another_team.size * P[another_team.index][self.index])

        return W

    def compatibility_with_floor(self, floor):
        """
        CALCULATES THE COMPATIBILITY OF THIS TEAM WITH THE GIVEN FLOOR

        INPUT:
            - floor: The floor with who we will measure the team's compatibility

        OUTPUT:
            - C: An integer which represents how good of an idea it would be to put the team on this floor
        """

        C = sum([self.compatibility_with_team(t) for t in floor.teams]) + POPULATION_SCALING_CONSTANT * (floor.cur_capacity - self.size)

        return C


class Floor:
    def __init__(self, teams, cur_capacity):
        self.teams = teams
        self.max_capacity = cur_capacity
        self.cur_capacity = cur_capacity

    def __str__(self):
        return str(self.teams)

    def add_team(self, new_team):
        """
        ADDS A NEW TEAM TO A FLOOR

        INPUT:
            - new_team: The new team that is going to be added

        OUTPUT:
            - void
        """

        self.teams.append(new_team)
        self.cur_capacity -= new_team.size


def fill_floors(teams, floors):
    """
    FILLS UP THE ROOMS WITH THE TEAMS GIVEN, WITH CERTAIN CONSTRAINTS IN MIND

    INPUT:
        - teams: An array of teams, SORTED by team size (highest to lowest)
        - floors: An array of floors; each floor is represented by its capacity

    OUTPUT:
        - optimized_floors: A modified array of floors with the optimum team combination
    """

    """
    # Iterate through the teams, starting from the one with the highest size
    # For each team, iterate through each of the floors
    # For each floor, for each team, calculate the compatibility of the team with that floor
    # Slot the team into the floor with the highest compatibility
    """

    for team in teams:
        max_compatibility = team.compatibility_with_floor(floors[0])  # represents the maximum compatibility value of the current team with any floor
        max_i = 0  # represents the floor this team has the highest compatibility with

        for i in range(len(floors)):  # Iterates through all the floors
            cur_compatibility = team.compatibility_with_floor(floors[i])  # Measures the compatibility of the current team with the current floor

            if cur_compatibility == max_compatibility and floors[i].cur_capacity > floors[max_i].cur_capacity:  # If all things equal, the current floor has more space than the previous "best" floor for the team
                max_i = i

            elif cur_compatibility > max_compatibility:
                max_i = i
                max_compatibility = cur_compatibility

        floors[max_i].add_team(team)  # Adds the team to the floor with the highest compatibility

    optimized_floors = floors

    return optimized_floors


floors = [
    Floor([], 43),
    Floor([], 81),
    Floor([], 73),
    Floor([], 54),
    Floor([], 97),
]

teams = [
    Team(9, 56),
    Team(3, 51),
    Team(10, 49),
    Team(1, 45),
    Team(6, 42),
    Team(5, 37),
    Team(2, 34),
    Team(8, 29),
    Team(0, 22),
    Team(7, 16),
    Team(4, 11),
]

counter = 1
total_building_affinity = 0
total_building_pop = sum([t.size for t in teams])

for floor in fill_floors(teams, floors):
    num_floor_ppl = sum([team.size for team in floor.teams])
    num_two_team_combinations = 0

    print("-------")
    print(f'FLOOR {counter}:')

    counter += 1

    for team in floor.teams:
        print(team)

    print()

    total_affinity = 0

    for i in range(len(floor.teams)):
        for j in range(i + 1, len(floor.teams)):
            total_affinity += floor.teams[i].compatibility_with_team(floor.teams[j])
            num_two_team_combinations += 1

    print(f'Filled : ' + '%.2f' % ((num_floor_ppl / floor.max_capacity) * 100) + "%")

    affinity = total_affinity / num_two_team_combinations if num_two_team_combinations != 0 else 0
    affinity_per_person = affinity / num_floor_ppl
    print(f'Affinity Per Person for Floor: ' + '%.2f' % affinity_per_person)

    total_building_affinity += affinity_per_person * num_floor_ppl

    print("-------\n")

print("Average Affinity Per Person in whole building: " + "%.2f" % (total_building_affinity / total_building_pop))
