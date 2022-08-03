from django.shortcuts import render

# Create your views here.


def home_view(request):
    return render(request, 'home.html', {})


def about_view(request):
    return render(request, 'about.html', {})


def team_view(request):
    return render(request, 'team.html', {})


def mint_view(request):
    return render(request, 'mint.html', {})

def game_view(request):
    return render(request, 'game.html', {})

