<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\album;
use App\Models\image;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ImageResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ImageResource\RelationManagers;

class ImageResource extends Resource
{
    protected static ?string $model = image::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Section::make('Image Details')->schema([
                TextInput::make('name')->label('Image Name'),
                FileUpload::make("path")->label('Image')->disk('public')->directory('AlbumImages'),
            ])->columnSpan(2),
            Section::make("Album Name")->schema([
                Select::make('album_id')
                ->required()
                ->label('Choose album')
                ->options(album::all()->pluck('name', 'id')),
            ])->columnSpan(1),
        ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
        ->columns([
            TextColumn::make('id')->sortable(),
            ImageColumn::make('path')->circular(),
            TextColumn::make('name')
            ->label('Image name')
            ->searchable()
            ->sortable()
            ->weight('medium')
            ->alignLeft(),
            TextColumn::make('album.name')
                ->label('album name')
                ->searchable()
                ->sortable()
                ->weight('medium')
                ->alignLeft(),
            TextColumn::make('created_at')
                ->label('created_at')
                ->sortable()
                ->toggleable(),
            TextColumn::make('updated_at')
                ->label('updated_at')
                ->sortable()
                ->toggleable(),
        ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListImages::route('/'),
            'create' => Pages\CreateImage::route('/create'),
            'edit' => Pages\EditImage::route('/{record}/edit'),
        ];
    }
}
