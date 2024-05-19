function skillsMember()
{
  var member = new Object();
  member.name = "name";
  member.skills = ["skill1", "skill2", "skill3"];
  member.showSkills = function()
  {
    for (var i = 0; i < this.skills.length; i++)
    {
      console.log(this.skills[i]);
    }
  }
  return member;
}